import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2195Component } from './test-component2195.component';

describe('TestComponent2195Component', () => {
  let component: TestComponent2195Component;
  let fixture: ComponentFixture<TestComponent2195Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2195Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2195Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
