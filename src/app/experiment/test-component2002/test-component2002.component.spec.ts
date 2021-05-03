import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2002Component } from './test-component2002.component';

describe('TestComponent2002Component', () => {
  let component: TestComponent2002Component;
  let fixture: ComponentFixture<TestComponent2002Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2002Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2002Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
