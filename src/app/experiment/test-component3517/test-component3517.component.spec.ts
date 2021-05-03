import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3517Component } from './test-component3517.component';

describe('TestComponent3517Component', () => {
  let component: TestComponent3517Component;
  let fixture: ComponentFixture<TestComponent3517Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3517Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3517Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
