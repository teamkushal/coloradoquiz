import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent620Component } from './test-component620.component';

describe('TestComponent620Component', () => {
  let component: TestComponent620Component;
  let fixture: ComponentFixture<TestComponent620Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent620Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent620Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
