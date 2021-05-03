import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2034Component } from './test-component2034.component';

describe('TestComponent2034Component', () => {
  let component: TestComponent2034Component;
  let fixture: ComponentFixture<TestComponent2034Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2034Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2034Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
