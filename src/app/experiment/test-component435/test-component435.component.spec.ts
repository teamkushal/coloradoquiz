import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent435Component } from './test-component435.component';

describe('TestComponent435Component', () => {
  let component: TestComponent435Component;
  let fixture: ComponentFixture<TestComponent435Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent435Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent435Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
