import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2825Component } from './test-component2825.component';

describe('TestComponent2825Component', () => {
  let component: TestComponent2825Component;
  let fixture: ComponentFixture<TestComponent2825Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2825Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2825Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
