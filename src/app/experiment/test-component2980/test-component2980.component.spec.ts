import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2980Component } from './test-component2980.component';

describe('TestComponent2980Component', () => {
  let component: TestComponent2980Component;
  let fixture: ComponentFixture<TestComponent2980Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2980Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2980Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
