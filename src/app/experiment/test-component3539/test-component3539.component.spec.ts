import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3539Component } from './test-component3539.component';

describe('TestComponent3539Component', () => {
  let component: TestComponent3539Component;
  let fixture: ComponentFixture<TestComponent3539Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3539Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3539Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
