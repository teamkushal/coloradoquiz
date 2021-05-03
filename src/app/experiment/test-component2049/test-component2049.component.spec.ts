import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2049Component } from './test-component2049.component';

describe('TestComponent2049Component', () => {
  let component: TestComponent2049Component;
  let fixture: ComponentFixture<TestComponent2049Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2049Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2049Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
