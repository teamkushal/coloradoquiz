import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent968Component } from './test-component968.component';

describe('TestComponent968Component', () => {
  let component: TestComponent968Component;
  let fixture: ComponentFixture<TestComponent968Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent968Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent968Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
