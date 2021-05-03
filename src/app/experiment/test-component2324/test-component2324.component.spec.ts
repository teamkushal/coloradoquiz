import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2324Component } from './test-component2324.component';

describe('TestComponent2324Component', () => {
  let component: TestComponent2324Component;
  let fixture: ComponentFixture<TestComponent2324Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2324Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2324Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
