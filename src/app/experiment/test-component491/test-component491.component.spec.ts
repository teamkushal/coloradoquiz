import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent491Component } from './test-component491.component';

describe('TestComponent491Component', () => {
  let component: TestComponent491Component;
  let fixture: ComponentFixture<TestComponent491Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent491Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent491Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
