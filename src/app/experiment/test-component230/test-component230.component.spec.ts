import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent230Component } from './test-component230.component';

describe('TestComponent230Component', () => {
  let component: TestComponent230Component;
  let fixture: ComponentFixture<TestComponent230Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent230Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent230Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
