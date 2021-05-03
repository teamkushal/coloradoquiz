import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent191Component } from './test-component191.component';

describe('TestComponent191Component', () => {
  let component: TestComponent191Component;
  let fixture: ComponentFixture<TestComponent191Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent191Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent191Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
