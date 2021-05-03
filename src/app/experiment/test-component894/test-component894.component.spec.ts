import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent894Component } from './test-component894.component';

describe('TestComponent894Component', () => {
  let component: TestComponent894Component;
  let fixture: ComponentFixture<TestComponent894Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent894Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent894Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
