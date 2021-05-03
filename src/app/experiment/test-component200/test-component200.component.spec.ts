import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent200Component } from './test-component200.component';

describe('TestComponent200Component', () => {
  let component: TestComponent200Component;
  let fixture: ComponentFixture<TestComponent200Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent200Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent200Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
