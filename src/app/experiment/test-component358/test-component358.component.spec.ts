import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent358Component } from './test-component358.component';

describe('TestComponent358Component', () => {
  let component: TestComponent358Component;
  let fixture: ComponentFixture<TestComponent358Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent358Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent358Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
