import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent21Component } from './test-component21.component';

describe('TestComponent21Component', () => {
  let component: TestComponent21Component;
  let fixture: ComponentFixture<TestComponent21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent21Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
