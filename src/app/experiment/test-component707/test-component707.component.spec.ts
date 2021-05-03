import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent707Component } from './test-component707.component';

describe('TestComponent707Component', () => {
  let component: TestComponent707Component;
  let fixture: ComponentFixture<TestComponent707Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent707Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent707Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
