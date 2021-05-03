import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2016Component } from './test-component2016.component';

describe('TestComponent2016Component', () => {
  let component: TestComponent2016Component;
  let fixture: ComponentFixture<TestComponent2016Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2016Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2016Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
