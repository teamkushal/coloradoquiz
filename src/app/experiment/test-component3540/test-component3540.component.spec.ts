import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3540Component } from './test-component3540.component';

describe('TestComponent3540Component', () => {
  let component: TestComponent3540Component;
  let fixture: ComponentFixture<TestComponent3540Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3540Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3540Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
