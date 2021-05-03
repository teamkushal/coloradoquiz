import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent449Component } from './test-component449.component';

describe('TestComponent449Component', () => {
  let component: TestComponent449Component;
  let fixture: ComponentFixture<TestComponent449Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent449Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent449Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
