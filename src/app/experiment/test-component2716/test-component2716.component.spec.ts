import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2716Component } from './test-component2716.component';

describe('TestComponent2716Component', () => {
  let component: TestComponent2716Component;
  let fixture: ComponentFixture<TestComponent2716Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2716Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2716Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
