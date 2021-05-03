import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2121Component } from './test-component2121.component';

describe('TestComponent2121Component', () => {
  let component: TestComponent2121Component;
  let fixture: ComponentFixture<TestComponent2121Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2121Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2121Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
