import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent307Component } from './test-component307.component';

describe('TestComponent307Component', () => {
  let component: TestComponent307Component;
  let fixture: ComponentFixture<TestComponent307Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent307Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent307Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
