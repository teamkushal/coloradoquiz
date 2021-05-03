import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent555Component } from './test-component555.component';

describe('TestComponent555Component', () => {
  let component: TestComponent555Component;
  let fixture: ComponentFixture<TestComponent555Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent555Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent555Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
