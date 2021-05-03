import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent980Component } from './test-component980.component';

describe('TestComponent980Component', () => {
  let component: TestComponent980Component;
  let fixture: ComponentFixture<TestComponent980Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent980Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent980Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
