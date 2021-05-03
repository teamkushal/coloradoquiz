import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent426Component } from './test-component426.component';

describe('TestComponent426Component', () => {
  let component: TestComponent426Component;
  let fixture: ComponentFixture<TestComponent426Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent426Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent426Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
