import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent629Component } from './test-component629.component';

describe('TestComponent629Component', () => {
  let component: TestComponent629Component;
  let fixture: ComponentFixture<TestComponent629Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent629Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent629Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
