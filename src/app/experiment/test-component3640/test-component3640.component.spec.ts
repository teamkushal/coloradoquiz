import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3640Component } from './test-component3640.component';

describe('TestComponent3640Component', () => {
  let component: TestComponent3640Component;
  let fixture: ComponentFixture<TestComponent3640Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3640Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3640Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
