import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2844Component } from './test-component2844.component';

describe('TestComponent2844Component', () => {
  let component: TestComponent2844Component;
  let fixture: ComponentFixture<TestComponent2844Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2844Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2844Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
