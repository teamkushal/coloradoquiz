import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent116Component } from './test-component116.component';

describe('TestComponent116Component', () => {
  let component: TestComponent116Component;
  let fixture: ComponentFixture<TestComponent116Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent116Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent116Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
