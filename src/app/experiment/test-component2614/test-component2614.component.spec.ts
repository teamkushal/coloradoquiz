import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2614Component } from './test-component2614.component';

describe('TestComponent2614Component', () => {
  let component: TestComponent2614Component;
  let fixture: ComponentFixture<TestComponent2614Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2614Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2614Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
