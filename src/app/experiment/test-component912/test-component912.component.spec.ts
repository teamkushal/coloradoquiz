import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent912Component } from './test-component912.component';

describe('TestComponent912Component', () => {
  let component: TestComponent912Component;
  let fixture: ComponentFixture<TestComponent912Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent912Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent912Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
