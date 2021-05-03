import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3601Component } from './test-component3601.component';

describe('TestComponent3601Component', () => {
  let component: TestComponent3601Component;
  let fixture: ComponentFixture<TestComponent3601Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3601Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3601Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
