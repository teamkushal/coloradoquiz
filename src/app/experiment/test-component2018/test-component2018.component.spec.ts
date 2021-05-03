import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2018Component } from './test-component2018.component';

describe('TestComponent2018Component', () => {
  let component: TestComponent2018Component;
  let fixture: ComponentFixture<TestComponent2018Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2018Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2018Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
