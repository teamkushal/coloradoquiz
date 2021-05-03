import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent354Component } from './test-component354.component';

describe('TestComponent354Component', () => {
  let component: TestComponent354Component;
  let fixture: ComponentFixture<TestComponent354Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent354Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent354Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
