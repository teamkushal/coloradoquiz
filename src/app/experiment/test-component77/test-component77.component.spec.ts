import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent77Component } from './test-component77.component';

describe('TestComponent77Component', () => {
  let component: TestComponent77Component;
  let fixture: ComponentFixture<TestComponent77Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent77Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent77Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
