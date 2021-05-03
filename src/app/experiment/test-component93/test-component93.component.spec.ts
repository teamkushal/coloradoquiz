import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent93Component } from './test-component93.component';

describe('TestComponent93Component', () => {
  let component: TestComponent93Component;
  let fixture: ComponentFixture<TestComponent93Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent93Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent93Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
