import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2181Component } from './test-component2181.component';

describe('TestComponent2181Component', () => {
  let component: TestComponent2181Component;
  let fixture: ComponentFixture<TestComponent2181Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2181Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2181Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
