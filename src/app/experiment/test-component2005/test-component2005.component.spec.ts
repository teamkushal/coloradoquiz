import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2005Component } from './test-component2005.component';

describe('TestComponent2005Component', () => {
  let component: TestComponent2005Component;
  let fixture: ComponentFixture<TestComponent2005Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2005Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2005Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
