import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent160Component } from './test-component160.component';

describe('TestComponent160Component', () => {
  let component: TestComponent160Component;
  let fixture: ComponentFixture<TestComponent160Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent160Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent160Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
