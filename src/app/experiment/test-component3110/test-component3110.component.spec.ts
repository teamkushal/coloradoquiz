import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3110Component } from './test-component3110.component';

describe('TestComponent3110Component', () => {
  let component: TestComponent3110Component;
  let fixture: ComponentFixture<TestComponent3110Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3110Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3110Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
