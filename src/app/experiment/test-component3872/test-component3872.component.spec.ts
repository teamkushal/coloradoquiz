import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3872Component } from './test-component3872.component';

describe('TestComponent3872Component', () => {
  let component: TestComponent3872Component;
  let fixture: ComponentFixture<TestComponent3872Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3872Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3872Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
