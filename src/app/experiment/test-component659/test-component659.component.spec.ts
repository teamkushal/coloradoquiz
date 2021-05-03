import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent659Component } from './test-component659.component';

describe('TestComponent659Component', () => {
  let component: TestComponent659Component;
  let fixture: ComponentFixture<TestComponent659Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent659Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent659Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
