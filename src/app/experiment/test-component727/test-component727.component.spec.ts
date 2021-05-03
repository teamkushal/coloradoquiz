import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent727Component } from './test-component727.component';

describe('TestComponent727Component', () => {
  let component: TestComponent727Component;
  let fixture: ComponentFixture<TestComponent727Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent727Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent727Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
