import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent986Component } from './test-component986.component';

describe('TestComponent986Component', () => {
  let component: TestComponent986Component;
  let fixture: ComponentFixture<TestComponent986Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent986Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent986Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
