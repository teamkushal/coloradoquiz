import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent676Component } from './test-component676.component';

describe('TestComponent676Component', () => {
  let component: TestComponent676Component;
  let fixture: ComponentFixture<TestComponent676Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent676Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent676Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
