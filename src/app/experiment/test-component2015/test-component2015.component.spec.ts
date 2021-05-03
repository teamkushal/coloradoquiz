import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2015Component } from './test-component2015.component';

describe('TestComponent2015Component', () => {
  let component: TestComponent2015Component;
  let fixture: ComponentFixture<TestComponent2015Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2015Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2015Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
