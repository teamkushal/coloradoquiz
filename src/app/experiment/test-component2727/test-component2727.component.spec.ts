import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2727Component } from './test-component2727.component';

describe('TestComponent2727Component', () => {
  let component: TestComponent2727Component;
  let fixture: ComponentFixture<TestComponent2727Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2727Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2727Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
