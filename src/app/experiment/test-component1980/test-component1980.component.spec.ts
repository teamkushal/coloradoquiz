import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1980Component } from './test-component1980.component';

describe('TestComponent1980Component', () => {
  let component: TestComponent1980Component;
  let fixture: ComponentFixture<TestComponent1980Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1980Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1980Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
