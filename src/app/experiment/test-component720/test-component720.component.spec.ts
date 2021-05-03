import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent720Component } from './test-component720.component';

describe('TestComponent720Component', () => {
  let component: TestComponent720Component;
  let fixture: ComponentFixture<TestComponent720Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent720Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent720Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
